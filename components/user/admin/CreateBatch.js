import BatchEdit from "@/components/Modules/batches/BatchEdit";
import React from "react";




const CreateNewclass = () => {
  
  return (
    <>
      <div className="mt-10 sm:mt-20">
        
        <div className="">          
          <BatchEdit actionBtn="Add New Batch" link="/admin/batch-details" />
        </div>
      </div>
    </>
  );
};

export default CreateNewclass;

// supabase
// .from("classes")
// .insert({
//   class_name: enteredclassName,
//   teacher_email: enteredTeacherEmail,
//   type: enteredType,
//   book_name: enteredBookName,
// })
// .then((res) => {
//   if (!res.ok) {
//     setError(
//       "Teacher Already added to the class please add a new teacher"
//     );
//     return;
//   }
// });

// const { data, error } = await supabase
// .from("teachers")
// .update({ class_id_email: enteredTeacherEmail })
// .eq("email", enteredTeacherEmail)
// .select();

// if (error) {
// setError("Server Error");
// return;
// }

// console.log(data);
// console.log(error);
