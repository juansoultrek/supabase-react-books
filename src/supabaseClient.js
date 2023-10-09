import {createClient} from "@supabase/supabase-js";

const supabase = createClient(
    process.env.REACT_APP_SUPABASE_CLIENT_URL,
    process.env.REACT_APP_SUPABASE_PROJECT_KEY);