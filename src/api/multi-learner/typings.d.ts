declare namespace API {
  type Account = {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
    user: User;
  };

  type Comment = {
    id: string;
    content: string;
    learningexperience: LearningExperience;
    LearningExperienceId: string;
    TechnicalLearnerId: string;
    author: TechnicalLearner;
    isDeleted: boolean;
    parents: CommentRelation[];
    children: CommentRelation[];
    createdAt: string;
  };

  type CommentRelation = {
    parent: Comment;
    parentsId: string;
    children: Comment;
    childrenId: string;
    createdAt: string;
  };

  type CreateTechnologyDto = {
    name: string;
    description?: string;
  };

  type findOneTechnologyParams = {
    id: string;
  };

  type LearningExperience = {
    id: string;
    content: string;
    TechnicalLearnerId: string;
    author: TechnicalLearner;
    tags: TagOnLearningExperience[];
    comment: Comment[];
    technology: Technology[];
    isPublished: boolean;
    isDeleted: boolean;
    createdAt: string;
    upDatedAt: string;
  };

  type removeTechnologyParams = {
    id: string;
  };

  type Session = {
    id: string;
    sessionToken: string;
    userId: string;
    expires: string;
    user: User;
  };

  type Tag = {
    id: number;
    name: string;
    tagsonlearningexperiences: TagOnLearningExperience[];
    createdAt: string;
  };

  type TagOnLearningExperience = {
    tagId: number;
    tag: Tag;
    learningexperienceId: string;
    learningexperience: LearningExperience;
    assignedAt: string;
  };

  type TechnicalLearner = {
    id: string;
    user: User;
    userId: string;
    name: string;
    description?: string;
    learningExperience: LearningExperience[];
    comments: Comment[];
    createdAt: string;
    upDatedAt: string;
    technology: Technology[];
  };

  type Technology = {
    id: number;
    name: string;
    description?: string;
    learners: TechnicalLearner[];
    parents: TechnologyRelation[];
    children: TechnologyRelation[];
    learningexperience: LearningExperience[];
    createdAt: string;
    upDatedAt: string;
  };

  type TechnologyRelation = {
    parent: Technology;
    parentsId: number;
    children: Technology;
    childrenId: number;
    assignedAt: string;
  };

  type updateTechnologyParams = {
    id: string;
  };

  type User = {
    id: string;
    name?: string;
    email?: string;
    emailVerified?: string;
    image?: string;
    password?: string;
    accounts: Account[];
    sessions: Session[];
    TechnicalLearner: TechnicalLearner[];
    createdAt: string;
  };

  type VerificationToken = {
    identifier: string;
    token: string;
    expires: string;
  };
}
