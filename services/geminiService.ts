import { GoogleGenAI } from "@google/genai";
import { AssignmentParams } from "../types.ts";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLessonScaffold = async (params: AssignmentParams): Promise<string> => {
  const model = "gemini-3-flash-preview";

  const prompt = `
    Act as an expert AI-Integration Specialist for Education.
    I need you to design a "P.I.L.O.T. Protocol" compliant lesson activity for:
    Subject: ${params.subject}
    Grade Level: ${params.gradeLevel}
    Topic: ${params.topic}

    The goal is to create an assignment where AI is used as a "Co-Pilot" (tutor, brainstormer, editor) and NOT as an "Autopilot" (doing the work).

    Structure the response using Markdown with the following sections:
    1. **Lesson Objective**: What will the student learn?
    2. **The AI Power-Up**: Specifically how students are allowed to use AI (e.g., "Use AI to generate 3 counter-arguments," or "Use AI to simplify this complex text").
    3. **The Human Pilot Role**: What the student must do *after* the AI interaction to demonstrate mastery (e.g., "Synthesize the AI's points into your own paragraph," or "Fact-check the AI's claims").
    4. **Ethical Check**: A specific question students must answer about the AI's output (e.g., "Did the AI hallucinate?", "Is there bias?").
    5. **Golden Rule Reminder**: A one-sentence reminder that they must credit the AI and own the final product.

    Keep it concise, practical, and directly usable by a teacher.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: "You are an educational consultant specializing in ethical AI integration in schools.",
      }
    });
    
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Error generating lesson plan:", error);
    return "Sorry, I encountered an error while generating the lesson plan. Please try again.";
  }
};