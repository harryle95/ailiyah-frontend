interface PromptType {
  /** prompt id */
  id: string;
  /** prompt request */
  text: string;
  /** request id */
  request_id: string;
  /** image */
  image: string | null;
}

interface RequestType {
  /** request id */
  id: string;
  /** project id */
  project_id: string;
  /** output image id */
  output_image: string;
  /** prompt data */
  prompts: Array<PromptType>;
}

interface ProjectType {
  /** project id */
  id: string;
  /** request data */
  requests: Array<RequestType>;
  /** name */
  name: string;
}

export type { ProjectType, RequestType, PromptType };
