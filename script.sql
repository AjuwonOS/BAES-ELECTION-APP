BEGIN TRANSACTION;
ALTER TABLE testing
ADD president TEXT;
ALTER TABLE testing
ADD vice_president TEXT;
ALTER TABLE testing
ADD general_secretary TEXT;
ALTER TABLE testing
ADD financial_secretary TEXT;
ALTER TABLE testing
ADD treasurer TEXT;
ALTER TABLE testing
ADD welfare_director TEXT;
ALTER TABLE testing
ADD academic_director TEXT;
ALTER TABLE testing
ADD social_director TEXT;
ALTER TABLE testing
ADD pro TEXT;
ALTER TABLE testing
ADD assitant_welfare_director TEXT;
ALTER TABLE testing
ADD assistant_academic_director TEXT;
ALTER TABLE testing
ADD assistant_social_director TEXT;
ALTER TABLE testing
ADD assistant_general_secretary TEXT;
ALTER TABLE testing
ADD senate_representative TEXT;
ALTER TABLE testing
ADD isVoted INTEGER NOT NULL DEFAULT 0;

COMMIT;

