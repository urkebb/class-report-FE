export class Report {
  constructor(
    public SubmittedAnswerId: number,
    public SubmitDateTime: Date,
    public Correct: number,
    public Progress: number,
    public UserId: number,
    public ExerciseId: number,
    public Difficulty: string,
    public Subject: string,
    public Domain: string,
    public LearningObjective: string,
    public _id?: string
  ) {}
}
