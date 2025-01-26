export type TProject = {
    id: number; // Primary key, auto-incremented
    name: string; // Name of the project
    client: string; // Client associated with the project
    work: string; // Work details
    story?: string; // Story of the project
    mainImage: string; // Optional main image URL
    secondImage?: string; // Optional second image URL
    thirdImage?: string; // Optional third image URL
    workFlow?: string; // Workflow description
  };
  