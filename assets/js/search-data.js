// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-news",
              title: "News",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/news/";
              },
            },{id: "dropdown-blog",
              title: "Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-seacrowd-got-accepted-to-emnlp-2024-glad-to-have-contributed-to-this-one-of-a-kind-collaboration-among-ai-researchers-in-southeast-asia-na-accept-ang-seacrowd-sa-emnlp-2024-masayá-akó-na-nakapag-contribute-akó-sa-walâng-katúlad-na-collab-na-itó-ng-mga-ai-researcher-sa-southeast-asia",
          title: 'SEACrowd got accepted to EMNLP 2024! Glad to have contributed to this one-of-a-kind...',
          description: "",
          section: "News",},{id: "news-we-presented-our-kalahi-filipino-cultural-representation-evaluation-at-paclic-2024-in-tokyo-we-thank-all-the-filipinos-that-made-this-possible-ibinahági-námin-ang-kalahi-na-isáng-pagsusurì-sa-representasyóng-kulturál-ng-filipino-sa-paclic-2024-sa-tokyo-lubós-ang-pasasálamat-námin-sa-mga-pilipinóng-nagíng-bahági-ng-tagumpáy-na-itó",
          title: 'We presented our KALAHI Filipino cultural representation evaluation at PACLIC 2024 in Tokyo!...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-the-unesco-headquarters-in-paris-to-share-our-efforts-in-bringing-the-southeast-asian-community-together-together-to-build-better-llms-inimbitáhan-akóng-pumuntá-sa-unesco-headquarters-sa-paris-pára-ibahági-ang-aming-pakikipagtúlungan-sa-komunidad-ng-tímog-silángang-ásya-upang-magbuô-ng-mas-mahuhúsay-na-llm",
          title: 'I was invited to the UNESCO Headquarters in Paris to share our efforts...',
          description: "",
          section: "News",},{id: "news-my-first-author-paper-batayan-got-accepted-for-the-main-track-of-acl-2025-our-sea-helm-paper-was-also-accepted-for-findings-natanggáp-ang-first-author-paper-kong-batayan-pára-sa-main-track-ng-acl-2025-natanggáp-din-ang-sea-helm-paper-námin-pára-sa-findings",
          title: 'My first-author paper Batayan got accepted for the Main track of ACL 2025!...',
          description: "",
          section: "News",},{id: "news-i-was-invited-by-dr-charibeth-cheng-of-dlsu-to-give-a-guest-lecture-on-ai-singapore-s-sea-lion-llm-project-thank-you-prof-chari-inimbitáhan-akó-ni-dra-charibeth-cheng-ng-dlsu-úpang-magbigáy-ng-guest-lecture-tungkól-sa-sea-lion-llm-project-ng-ai-singapore-maráming-salámat-prof-chari",
          title: 'I was invited by Dr. Charibeth Cheng of DLSU to give a guest...',
          description: "",
          section: "News",},{id: "news-we-presented-our-batayan-and-sea-helm-studies-at-acl-2025-in-vienna-ibinahági-namín-ang-batayan-at-sea-helm-sa-acl-2025-sa-vienna",
          title: 'We presented our Batayan and SEA-HELM studies at ACL 2025 in Vienna! Ibinahági...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
