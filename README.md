--------อธิบายการทำงาน---------------

Link Demo video : https://youtu.be/79MSFEISEzA

เป็น web application ใช้สำหรับการ stock หนังสือ 
แบ่งการทำงานได้เป็น 3 ส่วน  
front-end ใช้เป็น Angular.js framework => แสดง User interface ของ web application ใช้ประโยชน์ของ angular.js ในการเขียน application แบบแยก component ตามแต่ละการทำงาน

    -   add-book : ฟอร์มที่ใช้สำหรับการเพิ่มรายการหนังสือใหม่
    
    -   detail : หน้าแสดงายละเอียดของหนังสือแต่ละเล่ม
    
    -   edit-book : หน้าฟอร์มสำหรับแก้ไขหนังสือแต่ละเล่ม
    
    -   home : หน้าหลักที่ใช้ในการแสดงเว็บไซต์ หน้าแรกแสดงรายชื่อ/รูปภาพหนังสือยอดนิยม, หนังสือยอดนิยม
    
    -   list : หน้าสำหรับการแสดงตารางรายชื่อหนังสือทั้งหมด
    
    -   login : หน้าที่ใช้ในการเข้าสู่ระบบ Admin
    
    -   preview-book : ใช้ในส่วนของการค้นหารายชื่อหนังสือ
    
    -   service : กำหนดการดึงข้อมูลจาก back-end กำหนดการทำงานแต่ละฟังก์ชัน
    
    -   app component : สำหรับแถบ nav-bar ของเว็บไซต์
    
back-end ใช้เป็น Express.js framework =>  REST api ( GET PUT POST DELETE )
database เป็น MongoDB express

--------ลักษณะการทำงาน--------------

    หน้าเว็บไซต์จะมีการทำงานดังนี้ ในหน้าแรกของเว็บไซต์แสดงรูปภาพ/รายชื่อหนังสือยอดนิยม 3 อันดับแรก, 
    
    รายการค้นหารายชื่อหนังสือจากหนังสือทั้งหมด, รูปภาพ/
    
    รายชื่อของหนังสือทั้งหมดโดยสามารถชี้ไปยังรูปภาพเพื่อแสดงรายละเอียดของหนังสือ เช่น ชื่อหนังสือ ชื่อผู้เขียน สำนักพิมพ์ 
    
    ประเภท ราคา หากคลิกไปยังรูปจะแสดงรายละเอียดทั้งหมดของหนังสือ 
    
    หน้าต่อเป็นการแสดงหนังสือทั้งหมดในรูปแบบของตารางประกอบด้วยรายละเอียดทั้งหมดของหนังสือ สามารถแก้ไขรายละเอียดต่างๆ 
    
    หรือลบรายการหนังสืออกได้ (จะมีข้อความแจ้งเตือนยืนยันการลบ) และมีปุ่มที่ใช้ในการเพิ่มรายการหนังสือใหม่ที่ด้านบนของตาราง 
    
    เมื่อคลิดเข้าไปจะเป็นหน้ากรอกฟอร์มรายละเอียดของหนังสือที่ต้องการเพิ่มเข้ามา 
    
    ในแถบด้านบนของเว็บไซต์จะมีปุ่มที่ใช้ในการเข้าสู่ระบบ Admin หากไม่ได้ทำการเข้สู่ระบบจะไม่สามารถมองเห็นปุ่มแก้ไข, ลบ 
    
    และเพิ่มหนังสือในหน้าแสดงตารางหนังสือ (แสดงเพียงหน้าที่ไม่สามารถแก้ไขได้) 

--------สมาชิกในกลุ่ม-----------------

6310110139 นางสาวณัชชา ด่านศิริวุฒิ

6310110209 นางสาวธันย์ชนก หงส์สุวรรวัธนะ

6310110270 นายปภาวิน หมื่นพัฒนกิจ