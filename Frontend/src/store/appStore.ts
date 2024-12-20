import { create } from "zustand";

type AppStore = {
    isLoading: boolean;
    setIsLoading: (loadingState: boolean) => void;
    gettingStartedStep: number;
    setGettingStartedStep: (value: number) => void
    interests: { value: string, label: string }[]
};

const interests = [
    "Hiking",
    "Photography",
    "Yoga",
    "Cooking",
    "Traveling",
    "Running",
    "Cycling",
    "Painting",
    "Drawing",
    "Dancing",
    "Gardening",
    "Fitness",
    "Gaming",
    "Meditation",
    "Reading",
    "Writing",
    "Music",
    "Movies",
    "Board Games",
    "Karaoke",
    "Basketball",
    "Football (Soccer)",
    "Tennis",
    "Golf",
    "Rock Climbing",
    "Surfing",
    "Skiing",
    // "Snowboarding",
    // "Fishing",
    // "Kayaking",
    // "Camping",
    // "Baking",
    // "DIY Projects",
    // "Pottery",
    // "Knitting",
    // "Sewing",
    // "Volunteering",
    // "Public Speaking",
    // "Coding",
    // "Graphic Design",
    // "Photography",
    // "Blogging",
    // "Vlogging",
    // "Podcasting",
    // "Stand-up Comedy",
    // "Chess",
    // "Origami",
    // "Martial Arts",
    // "Pilates",
    // "CrossFit",
    // "Weightlifting",
    // "Skateboarding",
    // "Swimming",
    // "Scuba Diving",
    // "Skydiving",
    // "Bird Watching",
    // "Astronomy",
    // "Wine Tasting",
    // "Beer Brewing",
    // "Whiskey Tasting",
    // "Food Tasting",
    // "Vegan Cooking",
    // "Vegetarianism",
    // "Environmental Activism",
    // "Animal Rights",
    // "Digital Marketing",
    // "Entrepreneurship",
    // "Investing",
    // "Stock Trading",
    // "Cryptocurrency",
    // "Real Estate",
    // "Self-improvement",
    // "Personal Finance",
    // "Minimalism",
    // "Mindfulness",
    // "Spirituality",
    // "Astrology",
    // "Tarot Reading",
    // "Genealogy",
    // "History",
    // "Philosophy",
    // "Science",
    // "Mathematics",
    // "Artificial Intelligence",
    // "Virtual Reality",
    // "Augmented Reality",
    // "Homebrewing",
    // "Carpentry",
    // "Interior Design",
    // "Fashion Design",
    // "Jewelry Making",
    // "Tattooing",
    // "Calligraphy",
    // "Language Learning",
    // "Travel Writing",
    // "Urban Exploration",
    // "Geocaching",
    // "Parkour",
    // "Esports",
    // "LARPing",
    // "Cosplaying",
    // "Archery",
    // "Sailing",
    // "Horseback Riding",
    // "Dog Training",
    // "Bird Training",
    // "Pet Adoption"
];


export const useAppStore = create<AppStore>((set) => ({
    isLoading: false,
    gettingStartedStep: 1,
    interests: interests.map((interest) => ({ value: interest, label: interest })),
    setIsLoading: (loadingState) => {
        set(() => ({ isLoading: loadingState }));
    },
    setGettingStartedStep: (step) => {
        set(() => ({ gettingStartedStep: step }));
    }
}));