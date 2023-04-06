import { SwitchesCardProps } from "@/components/dataComponents/formal/cookiesModal";

export const cookieData: SwitchesCardProps = {
  data: [
    {
      title: "Essential cookies",
      description:
        "These cookies are necessary for the website to function properly and cannot be disabled.",
      disabled: true,
      label: "essential",
    },
    {
      title: "Performance cookies",
      description:
        "These cookies help us analyze how visitors use our website, so we can improve it over time.",
      label: "performance",
    },
    {
      title: "Targeting or Advertising Cookies",
      description:
      "These cookies are used to deliver targeted ads based on a user's interests and behavior.",
      label: "advertising",
    },
    {
      title: "Social media cookies",
      description:
        "These cookies may be set by social media platforms to allow you to share content from our website on your social media profiles.",
      label: "social",
    },
  ],
};
