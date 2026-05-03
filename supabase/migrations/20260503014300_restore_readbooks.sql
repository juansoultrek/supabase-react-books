-- Restore only the public.readbooks table from the archived Supabase backup.
-- This intentionally avoids restoring auth, storage, realtime, or other Supabase-managed schemas.

BEGIN;

DO $$
BEGIN
  CREATE TYPE public.format_options_type AS ENUM ('physical', 'digital');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS public.readbooks (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title text,
  author text,
  genre text,
  description text,
  date_purchased date,
  date_finished_reading date,
  personal_notes text,
  format_options public.format_options_type
);

INSERT INTO public.readbooks (
  id,
  title,
  author,
  genre,
  description,
  date_purchased,
  date_finished_reading,
  personal_notes,
  format_options
)
OVERRIDING SYSTEM VALUE
VALUES
  ('20', 'Contesting: The Name It & Claim It Game: WINeuvers for WISHcraft', 'Helene Hadsell', 'Law of Attraction', 'How to be a winner—in the contests you enter or in the game of life.
Who says you can’t win’em all?!
Helene Hadsell was ''the woman who won every contest prize she desired.'' In Contesting: The Name It & Claim It Game, she shares her winning secrets in the vibrant, warm, and folksy manner that was uniquely her.', '2023-08-26', '2023-08-27', 'I loved this book. It made me feel happy and optimistic, and that I can achieve anything I want with a positive attitude. This is a fantastic and easy read that introduces you to the law of attraction and how to really manifest the things that you want.', 'digital'),
  ('21', 'In Contact With Other Realms: An Adventurer''s Experiences in Awareness', 'Helen Hadsel', 'Spiritual', 'Are there questions, circumstances, or perhaps experiences in your life that you have been struggling to understand about the unseen world or other dimensions? You will find your answers in this book. Helene Hadsell leads you on an adventure with her deep insights and unique storytelling style that literally sweeps you along with excitement. Helene shares her personal experiences—that began at the age of six—about messengers, thought forms, apparitions, levitating, and telepathy, along with her sage advice, plus her techniques for you to pursue.', '2023-08-27', '2023-08-29', 'The book made me realize that there are supernatural forces that not everyone is aware of. Some people develop them through their life experiences, and some of them are born with the unique gift to sense extraordinary higher intelligences. This book intrigued me and made me think more about our sixth sense and intuition.', 'digital'),
  ('16', 'Synchrodestiny', 'Deepak Chopra', 'Spiritual', 'In Synchrodestiny, Deepak Chopra teaches us to see coincidences as messages about the miraculous potential of each moment. He reveals how, through understanding the forces that shape coincidences, you can learn to live at a deeper level and access the flow of synchronicity that lies at the heart of existence.', '2023-08-18', '2023-08-21', 'I acquired the skill of deciphering the significance concealed within everyday coincidences. "Synchrodestiny" served as a catalyst that revitalized my faith, empowering me to manifest my desires from the boundless universe.', 'digital'),
  ('17', 'Como atraer el Amor 1', 'Lain Garcia Calvo', 'Personal growth', 'Obtain the essence of how to attract love to anchor yourself to the appropriate vibrational frequency, with an essence specifically designed and handcrafted', '2023-07-20', '2023-07-26', 'This book helped me feel that I am good enough and ready to love again, to learn about different personalities, how to improve in a relationship, and how to give instead of just receive.', 'physical'),
  ('18', 'Como atraer el Amor 2', 'Lain Garcia Calvo', 'Personal growth', 'The foundation of a healthy relationship is LOVE. To love and be loved is the ultimate goal in this world. It''s not something that is attainable by just a few, but it is possible for everyone, as long as we learn the basic rules and lay the groundwork for this to be possible.', '2023-07-31', '2023-08-06', 'The second part of this saga focuses more on different types of personalities and how to have a healthy relationship. I learned a lot from the book, and I feel that I am ready to put into practice all my findings. It has a nice and easy-to-read style. I devoured this saga in a week.', 'physical'),
  ('15', 'Destiny Of Souls', 'Michael Newton', 'Spiritual', 'Hypnotherapist Michael Newton presents his vision of the spirit world and how it works. Based on case studies of his patients, Newton answers pressing questions about the life of a soul in the spirit world: its birth, incarnation, reincarnation, and development both on Earth and beyond. After death on Earth, the soul travels back to the spirit world where it joins its soul group and there evolves, learns, socializes, and prepares for its next incarnation. But the activity of souls is not limited to the spirit world. They also take part in life on Earth as visitors or helpers and assist humans in their spiritual journeys.', '2021-08-13', '2023-08-12', 'This book served as a profound revelation, reminding me that each life we lead is imbued with a unique purpose for our souls. It became a source of solace during the difficult period following the loss of my wife, guiding me towards a deeper comprehension of the intricate notions surrounding the interplay of life between lives.', 'digital'),
  ('19', 'Exploring The Eternal Soul', 'Andy Tomlinson', 'Spiritual', 'Follow the fascinating journey of a group of ordinary people who have been regressed though a past life and into the afterlife. Using very deep hypnosis the most amazing soul memories surface of a spirit world that waits us all. Piece by piece the book uncovers each step of the journey and is full of illuminating case study extracts.

It allows us to tap into a wisdom that is so profound it is beyond normal human capacity. Discover amazing insights that answer a host of universal questions of spiritual, historical and philosophical importance.

Andy Tomlinson is a registered psychotherapist, hypnotherapist and is certified in Regression Therapy and Spiritual Regression. He is the Director of Training for the Past Life Regression Academy and trains, lectures and gives talks internationally on past lives and the soul memories between them. ', '2023-08-12', NULL, 'This particular book is a copy of Michael Newton''s ''Journey of Souls.'' It didn''t offer anything new. However, I truly enjoy reading about life between lives and confirming each time that we are eternal souls in this life to fulfill a purpose.', 'digital'),
  ('22', 'The power of positive thinking ', 'Norman Vincent Peale', 'Personal growth', 'The book describes the power positive thinking has and how a firm belief in something, does actually help in achieving it. In order to live a successful and constructive life, one needs to know about the secrets of positive thinking says the author for it is the most important ingredient for a better and blissful life. ', '2023-08-29', '2023-10-15', 'The book is a collection of anecdotes from the author''s life, all related to having faith in God and using quotes from the Bible to find happiness in life by realizing and fulfilling your life''s purpose.

I liked the positivity of the book, although I am not familiar with the Bible quotes. It made me think more about my intuition and how to overcome negative issues and turn them into solvable projects.', 'digital'),
  ('24', 'The Code of the Extraordinary Mind', 'Vishen Lakhiani', 'Personal Growth', 'This book teaches you to think like some of the greatest non-conformist minds of our era, to question, challenge, hack, and create new rules for YOUR life so you can define success on your own terms.', '2023-10-15', NULL, NULL, 'digital'),
  ('25', 'Autobiography of a Yogi', 'Paramahansa Yogananda', 'Spiritual', 'Autobiography of a Yogi is at once a beautifully written account of an exceptional life and a profound introduction to the ancient science of Yoga and its time-honored tradition of meditation. Profoundly inspiring, it is at the same time vastly entertaining, warmly humorous and filled with extraordinary personages.
Self-Realization Fellowship''s editions, and none others, include extensive material added by the author after the first edition was published, including a final chapter on the closing years of his life.', '2023-10-19', NULL, NULL, 'digital'),
  ('23', 'Trust Your Vibes', 'Sonia Choquette', 'Personal growth', 'our intuition supports your creativity, helps heal your emotional wounds, and calms your anxious and uncertain heart. It brings you peace of mind and shows you how to live in a higher, more harmonious way. To fully enjoy your life and to access the innate sense of security, confidence, and courage you deserve, trust your vibes.', '2023-10-15', '2023-11-05', 'I really love this book. It''s made me more conscious about relying on my intuition whenever I tackle a task, no matter how big or small. Trusting your inner voice is key. Don''t just listen to the noise around you, follow your instincts and trust your own judgment. It''s crucial to be guided by your true self.', 'digital')
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  author = EXCLUDED.author,
  genre = EXCLUDED.genre,
  description = EXCLUDED.description,
  date_purchased = EXCLUDED.date_purchased,
  date_finished_reading = EXCLUDED.date_finished_reading,
  personal_notes = EXCLUDED.personal_notes,
  format_options = EXCLUDED.format_options;

SELECT setval(
  pg_get_serial_sequence('public.readbooks', 'id'),
  COALESCE((SELECT MAX(id) FROM public.readbooks), 1),
  true
);

GRANT ALL ON TABLE public.readbooks TO anon;
GRANT ALL ON TABLE public.readbooks TO authenticated;
GRANT ALL ON TABLE public.readbooks TO service_role;
GRANT ALL ON SEQUENCE public.readbooks_id_seq TO anon;
GRANT ALL ON SEQUENCE public.readbooks_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.readbooks_id_seq TO service_role;

COMMIT;
