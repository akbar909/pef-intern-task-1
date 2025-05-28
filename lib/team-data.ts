interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

export const teamMembers = {
  cabinet: [
    {
      name: "Hassan Abdullah Memon",
      role: "President",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Hamaza Khalid",
      role: "Vice President",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Muhammad Sufiyan",
      role: "General Secretary",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sajjad",
      role: "Joint Secretary",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Umer Farooque",
      role: "Technical Coordinator",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Muhammad Saak Qk",
      role: "Events Manager",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Gotam Kumar",
      role: "Operations Manager",
      image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ],
  senior: [
    {
      name: "Agha Amanullah",
      role: "Senior Advisor",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Hamza Qureshi",
      role: "Senior Technical Lead",
      image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Akram Ali Choro",
      role: "Senior Project Manager",
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Rameez Ahmed",
      role: "Senior Operations Lead",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sajjad Ali",
      role: "Senior Events Coordinator",
      image: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Zeeshan",
      role: "Senior Public Relations",
      image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Zakaullah Junejo",
      role: "Senior Community Manager",
      image: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ],
  specialized: [
    {
      name: "Shumyle Ashraf",
      role: "Social Media Head",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Manages our online presence and digital marketing strategies."
    },
    {
      name: "Ammar Hassan Soomro",
      role: "Finance Secretary",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Handles budget management and financial planning for the organization."
    },
    {
      name: "Muhammad Athar",
      role: "Student Counsellor (Male)",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Provides guidance and support to male students in the organization."
    },
    {
      name: "Sania Nazar",
      role: "Student Counsellor (Female)",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Provides guidance and support to female students in the organization."
    },
    {
      name: "Ali Nawaz Bhanbhro",
      role: "Information Secretary (Male)",
      image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Manages information dissemination and documentation for the organization."
    },
    {
      name: "Sehrish Shahid",
      role: "Information Secretary (Female)",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Manages information dissemination and documentation for the organization."
    }
  ],
  department: [
    {
      name: "Ali Haider Memon",
      role: "Department Ambassador (ES)",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Represents the Electronic Engineering department."
    },
    {
      name: "Kareem Lashari",
      role: "Department Ambassador (PG)",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Represents the Petroleum and Gas Engineering department."
    },
    {
      name: "Anas Aamir Memon",
      role: "Membership Secretary (Male)",
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Manages membership recruitment and engagement for male students."
    },
    {
      name: "Hifza Khan",
      role: "Membership Secretary (Female)",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Manages membership recruitment and engagement for female students."
    }
  ]
};