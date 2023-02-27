import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_UR;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(
  "https://cdwdhedavgkgpexhthtx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkd2RoZWRhdmdrZ3BleGh0aHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3MDU0NTIsImV4cCI6MTk5MDI4MTQ1Mn0.XtLqfRc4QVqWrBRzKUl0Val_H7cQFLplVlJ9_leOIeM"
);

// const supabase = createClient(
//   "https://cdwdhedavgkgpexhthtx.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkd2RoZWRhdmdrZ3BleGh0aHR4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDcwNTQ1MiwiZXhwIjoxOTkwMjgxNDUyfQ.nYUbBvX4zKMmpc2ECrl9Aznvqoa6J5YqQ8kIsYwWZ_M",
//   {
//     auth: {
//       autoRefreshToken: true,
//       persistSession: true,
//     },
//   }
// );
export default supabase;
