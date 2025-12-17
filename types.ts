export enum TabView {
  HOME = 'HOME',
  PILLARS = 'PILLARS',
  PILOT_PROTOCOL = 'PILOT_PROTOCOL',
  ETHICAL_USE = 'ETHICAL_USE',
  TOOLS = 'TOOLS',
}

export interface PillarData {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  bg: string;
  points: {
    icon: string;
    title: string;
    desc: string;
  }[];
  outcome: string;
}

export interface PilotStep {
  letter: string;
  title: string;
  desc: string;
  action: string;
}

export interface AssignmentParams {
  subject: string;
  gradeLevel: string;
  topic: string;
}