declare interface HeroProps
{
    title: string,
    subtitle: string,
    highlights: Array
}

declare interface CTAButtonProps
{
    text: string;
}

declare interface PracticeCardProps
{
    id: number,
    title: string,
    desc: string,
    listTitle: string,
    listItems: Array,
    ui: string
}

declare interface ApplicationCardProps
{
    title: string,
    points: Array,
    disclaimer: string 
}

declare interface AlertProps {
  open: boolean
  type: "success" | "failure" | "empty"
  message: string
  duration?: number
  onClose: () => void
}

declare interface AlertState {
  open: boolean
  type: 'success' | 'failure' | 'empty'
  message: string
}