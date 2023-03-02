import TeacherProfile from '@/components/user/admin/Teachers/TeacherProfile';
import { useRouter } from 'next/router';
import React from 'react'

const index = () => {
    const router = useRouter();

    let id;
    if (router.query.teacher_id) {
      id = router.query.teacher_id;
      console.log(id);
    }
  
    return <>{id && <TeacherProfile email={id} />}</>;
}

export default index
