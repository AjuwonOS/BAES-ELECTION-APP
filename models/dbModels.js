export const electorateModel = `
CREATE TABLE IF NOT EXISTS BAES_STUDENTS_2025_2026 (
    email TEXT NOT NULL,
    matric_no VARCHAR(11) PRIMARY KEY,
    level INTEGER NOT NULL,
    name TEXT NOT NULL,
    payer_name TEXT NOT NULL,
    phone VARCHAR(10) NOT NULL,
    password VARCHAR(255),
    president TEXT,
    vice_president TEXT,
    general_secretary TEXT,
    financial_secretary TEXT,
    treasurer TEXT,
    welfare_director TEXT,
    academic_director TEXT,
    social_director TEXT,
    pro TEXT,
    assitant_welfare_director TEXT,
    assistant_academic_director TEXT,
    assistant_social_director TEXT,
    assistant_general_secretary TEXT,
    senate_representative TEXT,
    isVoted INTEGER NOT NULL DEFAULT 0
);
`;

export const contestantModel = `
CREATE TABLE IF NOT EXISTS BAES_ELECTION_CONTESTANTS_2025_2026(
    matric_no VARCHAR(11) PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    email TEXT NOT NULL,
    department TEXT NOT NULL,
    phone TEXT NOT NULL,
    cgpa  REAL NOT NULL,
    level INTEGER NOT NULL,
    image_name TEXT NOT NULL,
    votes INTEGER DEFAULT 0
);
`