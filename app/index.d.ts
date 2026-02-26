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