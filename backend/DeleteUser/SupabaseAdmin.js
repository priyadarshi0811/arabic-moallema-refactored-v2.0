import { createClient } from "@supabase/supabase-js";
const supabaseAdmin = createClient(
  "https://cdwdhedavgkgpexhthtx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkd2RoZWRhdmdrZ3BleGh0aHR4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDcwNTQ1MiwiZXhwIjoxOTkwMjgxNDUyfQ.nYUbBvX4zKMmpc2ECrl9Aznvqoa6J5YqQ8kIsYwWZ_M",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

export default supabaseAdmin;
