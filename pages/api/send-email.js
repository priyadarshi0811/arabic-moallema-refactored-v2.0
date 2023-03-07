import { createTransport } from "nodemailer";
import supabase from "@/supabaseClient";
import { addStudentTeacherToDB } from "@/backend/CreateUser/CreateStudentTeacherDB";
import { addStudentToBatch } from "@/backend/Batches/AddStudentToBatchDB";

export default async function sendEmail(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  const { email, password, userPath, name, contact, batch } = req.body;
  console.log(email);
  console.log(password);
  console.log(userPath);

  let finalUser = userPath === "student" ? "students" : "teachers";
  let typeUser = userPath === "student" ? "student" : "instructor";

  try {
    // Send email using Nodemailer
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: "jatinanjana51@gmail.com",
        pass: "socqywxcpsmtwvrn",
      },
    });

    //inserting data to student/teacher table

    addStudentTeacherToDB(finalUser, email, name, contact, typeUser);

    if (userPath === "student") {
      setTimeout(() => {
        addStudentToBatch(email, batch);
      }, 2000);
    }

    const mailOptions = {
      from: "jatinanjana51@gmail.com",
      to: email,
      subject: "Your new account details",
      text: `Your new account has been created. Email: ${email}, Password: ${password}`,
      html: `
      <center>
       <div style="margin-top: 10%; font-family: DM Mono;">
      <img src="https://thearabicmoallema.com/wp-content/uploads/2022/04/grid4-31-1.png" style="width: 15%; height: 10%">
      <hr style="width: 30%;">  <h2>Welcome to Arabic Moallema</h2>
      <p>
          Hello user,
          Here is your crederntials as a Student for Arabic Moallema:
          <br/>
          <hr style="width: 30%;">
          <label style="font-size: 20px;">Email: ${email}</label>
          <br/>
          <label style="font-size: 20px;">Password: ${password}</label>
          <hr style="width: 30%;">
          <p>If any issues, please connect with info@thearabicmoallema.com</p>
      </p>

  </div>
  <center>`, // html body
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending email" });
  }
}
