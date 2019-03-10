export class JobPosition {
  constructor(
    public title: string,
    public description: string,
    public skillsDesired?: string,
    public experienceRequired?: string,
    public educationRequired?: string
  ) {}
}
