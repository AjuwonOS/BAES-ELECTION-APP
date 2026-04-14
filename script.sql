CREATE TABLE IF NOT EXISTS testing (
    email TEXT NOT NULL,
    matric_no VARCHAR(11) PRIMARY KEY,
    level INTEGER NOT NULL,
    name TEXT NOT NULL,
    payer_name TEXT NOT NULL,
    phone VARCHAR(10) NOT NULL,
    password VARCHAR(255),
    president VARCHAR(11),
    vice_president VARCHAR(11),
    general_secretary VARCHAR(11),
    financial_secretary VARCHAR(11),
    treasurer VARCHAR(11),
    welfare_director VARCHAR(11),
    academic_director VARCHAR(11),
    social_director VARCHAR(11),
    sports_director VARCHAR(11),
    pro VARCHAR(11),
    assistant_welfare_director VARCHAR(11),
    assistant_academic_director VARCHAR(11),
    assistant_social_director VARCHAR(11),
    assistant_general_secretary VARCHAR(11),
    senate_representative VARCHAR(11),
    assistant_sports_director VARCHAR(11),
    isVoted INTEGER NOT NULL DEFAULT 0
);

UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'president' WHERE matric_no = 'BU22MCT2001';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'vice_president' WHERE matric_no = 'BU22MCT2002';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'general_secretary' WHERE matric_no = 'BU22MCT2003';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'financial_secretary' WHERE matric_no = 'BU22MCT2004';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'treasurer' WHERE matric_no = 'BU22MCT2005';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'welfare_director' WHERE matric_no = 'BU22MCT2006';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'social_director' WHERE matric_no = 'BU22MCT2007';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'sports_director' WHERE matric_no = 'BU22MCT2008';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'pro' WHERE matric_no = 'BU22MCT2009';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'assistant_welfare_director' WHERE matric_no = 'BU22MCT2010';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'assistant_academic_director' WHERE matric_no = 'BU22MCT2011';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'assistant_social_director' WHERE matric_no = 'BU22MCT2012';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'assistant_general_secretary' WHERE matric_no = 'BU22MCT2013';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'senate_representative' WHERE matric_no = 'BU22MCT2014';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'assistant_sports_director' WHERE matric_no = 'BU22MCT2015';
UPDATE BAES_ELECTION_CONTESTANTS_2025_2026 SET position = 'academic_director' WHERE matric_no = 'BU22MCT2016';
