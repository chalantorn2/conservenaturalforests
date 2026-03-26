# แก้ SPF Record ให้ Zoho รับ email จากเว็บไซต์

## ปัญหา
เว็บไซต์ส่ง email จาก server IP `203.170.190.137` (samuilookbiz.com)
แต่ Zoho ไม่รับ เพราะ SPF record ไม่ได้อนุญาต IP นี้

## วิธีแก้

### 1. เข้า SiteGround > DNS
- Login เข้า SiteGround
- ไปที่หน้า **Manage DNS Records** ของ `conservenaturalforests.org`

### 2. หา SPF Record
- หาบรรทัดที่เป็น **Type: TXT** และ **Name: conservenaturalforests.org.**
- ค่าปัจจุบันจะเป็นประมาณนี้:

```
v=spf1 +a +mx include:conservenaturalforests.org.spf.auto.dnssmart... ~all
```

### 3. กดแก้ไข (ปุ่มดินสอ)
- เพิ่ม `ip4:203.170.190.137` เข้าไป **ก่อน** คำว่า `include`
- ผลลัพธ์จะเป็น:

```
v=spf1 +a +mx ip4:203.170.190.137 include:conservenaturalforests.org.spf.auto.dnssmart... ~all
```

> ส่วน `include:...` ที่เหลือให้คงไว้เหมือนเดิมทุกอย่าง แค่แทรก `ip4:203.170.190.137` เข้าไป

### 4. Save แล้วรอ
- กด Save
- รอ DNS propagate ประมาณ 1-24 ชั่วโมง
- ลองส่ง test จากฟอร์มเว็บ แล้วเช็ค Zoho Mail ว่าได้รับมั้ย
