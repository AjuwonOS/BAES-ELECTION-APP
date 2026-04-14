export const electorateModel = `
CREATE TABLE IF NOT EXISTS BAES_STUDENTS_2025_2026 (
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