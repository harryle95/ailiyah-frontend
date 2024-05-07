import { SubmitFunction } from "react-router-dom";
import { FormDataType } from "@ailiyah-ui/prompt";

const doSubmission = (
  text: Array<string>,
  id: Array<string | null>,
  images: Array<File>,
  submit: SubmitFunction
) => {
  const submitFormData = new FormData();
  submitFormData.append("id", JSON.stringify(id));
  submitFormData.append("text", JSON.stringify(text));
  images.forEach((item) => submitFormData.append("images", item));
  submit(submitFormData, { method: "POST", encType: "multipart/form-data" });
};

const submitPrompt = (submit: SubmitFunction, prompt: string) => {
  const id = [null];
  const images = [new File([""], "empty.jpeg", { type: "image/jpeg" })];
  const text = [prompt];
  doSubmission(text, id, images, submit);
};

const submitForm = (
  submit: SubmitFunction,
  formData: FormDataType,
  intialFormData?: FormDataType
) => {
  if (Object.entries(formData).length == 0) {
    throw new Error("Form must contain contents");
  }
  const text = new Array();
  const images = new Array();
  const id = new Array();
  const previousId = intialFormData ? Object.keys(intialFormData) : [];
  for (const pair of Object.entries(formData)) {
    let [key, { prompt, thumbnail }] = pair;
    text.push(prompt);
    if (thumbnail) {
      images.push(thumbnail);
    } else {
      images.push(new File([""], "empty.jpeg", { type: "image/jpeg" }));
    }
    if (previousId.includes(key)) {
      id.push(key);
    } else {
      id.push(null);
    }
  }
  doSubmission(text, id, images, submit);
};

export { submitForm, submitPrompt };
