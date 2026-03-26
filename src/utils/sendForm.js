const API_URL = import.meta.env.DEV
  ? "https://conservenaturalforests.org/api/send-mail-gmail.php"
  : "/api/send-mail-gmail.php";

export async function sendForm(formType, data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form_type: formType, ...data }),
  });

  const text = await res.text();

  let json;
  try {
    json = JSON.parse(text);
  } catch {
    console.error("Server response:", text);
    throw new Error("Server error. Please try again later.");
  }

  if (!res.ok || !json.success) {
    throw new Error(json.message || "Something went wrong. Please try again.");
  }

  return json;
}
