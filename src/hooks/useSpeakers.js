import { useEffect, useState } from "react";
import { defaultSpeakers } from "../lib/constants";
import { hasSupabaseConfig, supabase } from "../lib/supabase";

export function useSpeakers() {
  const [speakers, setSpeakers] = useState(defaultSpeakers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadSpeakers() {
      try {
        if (!hasSupabaseConfig()) {
          if (isMounted) {
            setLoading(false);
          }
          return;
        }

        const { data, error: speakersError } = await supabase
          .from("speakers")
          .select("*")
          .order("created_at", { ascending: true });

        if (!isMounted) {
          return;
        }

        if (speakersError) {
          console.error("[speakers] Failed to load speakers:", speakersError);
          setError(speakersError.message);
          setLoading(false);
          return;
        }

        setSpeakers(data?.length ? data : defaultSpeakers);
        setLoading(false);
      } catch (loadError) {
        console.error("[speakers] Unexpected load error:", loadError);
        if (isMounted) {
          setError("Could not load speakers.");
          setLoading(false);
        }
      }
    }

    loadSpeakers();

    return () => {
      isMounted = false;
    };
  }, []);

  return { speakers, loading, error };
}
