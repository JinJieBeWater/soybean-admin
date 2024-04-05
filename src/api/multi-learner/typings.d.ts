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
  };

  type AccountRelations = {
    user: User;
  };

  type Comment = {
    id: string;
    content: string;
    LearningExperienceId: string;
    TechnicalLearnerId: string;
    isDeleted: boolean;
    createdAt: string;
  };

  type CommentRelation = {
    parentsId: string;
    childrenId: string;
    createdAt: string;
  };

  type CommentRelationRelations = {
    parent: Comment;
    children: Comment;
  };

  type CommentRelations = {
    learningexperience: LearningExperience;
    author: TechnicalLearner;
    parents: CommentRelation[];
    children: CommentRelation[];
  };

  type CreateTechnologyDto = {
    /** The name of the technology */
    name: string;
    /** The description of the technology */
    description?: string;
  };

  type findOneTechnologyParams = {
    id: string;
  };

  type LearningExperience = {
    id: string;
    content: string;
    TechnicalLearnerId: string;
    isPublished: boolean;
    isDeleted: boolean;
    createdAt: string;
    upDatedAt: string;
  };

  type LearningExperienceRelations = {
    author: TechnicalLearner;
    tags: TagOnLearningExperience[];
    comment: Comment[];
    technology: Technology[];
  };

  type paginationTechnologyParams = {
    /** 当前页码 */
    currentPage: number;
    /** 每页条数 */
    pageSize: number;
  };

  type PaginationVo = {
    /** 数据 */
    records: string[];
    /** 当前页码 */
    currentPage: number;
    /** 每页条数 */
    pageSize: number;
    /** 总条数 */
    total: number;
  };

  type removeTechnologyParams = {
    id: string;
  };

  type Session = {
    id: string;
    sessionToken: string;
    userId: string;
    expires: string;
  };

  type SessionRelations = {
    user: User;
  };

  type Tag = {
    id: number;
    name: string;
    createdAt: string;
  };

  type TagOnLearningExperience = {
    tagId: number;
    learningexperienceId: string;
    assignedAt: string;
  };

  type TagOnLearningExperienceRelations = {
    tag: Tag;
    learningexperience: LearningExperience;
  };

  type TagRelations = {
    tagsonlearningexperiences: TagOnLearningExperience[];
  };

  type TechnicalLearner = {
    id: string;
    userId: string;
    name: string;
    description?: string;
    createdAt: string;
    upDatedAt: string;
  };

  type TechnicalLearnerRelations = {
    user: User;
    learningExperience: LearningExperience[];
    comments: Comment[];
    technology: Technology[];
  };

  type Technology = {
    id: number;
    name: string;
    description?: string;
    createdAt: string;
    upDatedAt: string;
  };

  type TechnologyRelation = {
    parentsId: number;
    childrenId: number;
    assignedAt: string;
  };

  type TechnologyRelationRelations = {
    parent: Technology;
    children: Technology;
  };

  type TechnologyRelations = {
    learners: TechnicalLearner[];
    parents: TechnologyRelation[];
    children: TechnologyRelation[];
    learningexperience: LearningExperience[];
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
    createdAt: string;
  };

  type UserRelations = {
    accounts: Account[];
    sessions: Session[];
    TechnicalLearner: TechnicalLearner[];
  };

  type VerificationToken = {
    identifier: string;
    token: string;
    expires: string;
  };

  type VerificationTokenRelations = {};
}
