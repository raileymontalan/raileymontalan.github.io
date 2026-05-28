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
          section: "News",},{id: "news-i-was-invited-to-the-unesco-headquarters-in-paris-to-share-our-efforts-in-bringing-the-southeast-asian-community-together-together-to-build-better-llms-inimbitáhan-akóng-pumuntá-sa-unesco-headquarters-sa-paris-pára-ibahági-ang-áming-pakikipagtúlungan-sa-komunidád-ng-tímog-silángang-ásya-upang-magbuô-ng-mas-mahuhúsay-na-llm",
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
          section: "News",},{id: "news-our-paper-where-we-introduce-our-pre-training-and-post-training-regimes-for-our-multilingual-sea-lion-v3-models-was-accepted-at-ijcnlp-aacl-2026-main-congratulations-to-the-arf-team-tinanggáp-ang-áming-papél-kung-saán-inilahád-námin-ang-áming-paraán-ng-pre-training-at-post-training-pára-sa-áming-mga-multílingguwál-na-modélong-sea-lion-v3-sa-ijcnlp-aacl-2026-main-binabatì-ko-ang-arf-team",
          title: 'Our paper, where we introduce our pre-training and post-training regimes for our multilingual...',
          description: "",
          section: "News",},{id: "news-our-sea-lion-v3-paper-is-now-available-on-acl-anthology-we-ve-also-released-v4-models-of-sea-lion-built-on-gemma-3-and-qwen-3-on-huggingface-and-ollama-mahahánap-na-ang-áming-papél-tungkól-sa-sea-lion-v3-sa-acl-anthology-inilabás-na-rin-namín-ang-mga-v4-modl-ng-sea-lion-na-hangò-sa-gemma-3-at-qwen-3-sa-huggingface-at-sa-ollama",
          title: 'Our SEA-LION v3 paper is now available on ACL Anthology. We’ve also released...',
          description: "",
          section: "News",},{id: "news-version-4-5-of-sea-lion-was-released-today-these-were-built-upon-the-qwen-3-6-27b-and-gemma-4-e2b-architectures-and-underwent-distillation-from-stronger-models-using-our-sea-instruction-tuning-dataset-to-increase-their-multilingual-and-multicultural-fluency-try-them-out-here-today-inilabás-ngayón-ang-bersiyón-4-5-ng-sea-lion-nakabáse-ang-mga-itó-sa-arkitektúra-ng-qwen-3-6-27b-at-gemma-4-e2b-lálong-pinahusáy-ang-kakayaháng-multilingual-at-multicultural-ng-mga-itó-sa-pamamagítan-ng-distillation-mulâ-sa-mas-malakás-na-modélo-gámit-ang-áming-sea-instruction-tuning-dataset-subúkan-ang-mga-itò-ngayón",
          title: 'Version 4.5 of SEA-LION was released today! These were built upon the Qwen...',
          description: "",
          section: "News",},{id: "news-more-wins-for-southeast-asia-our-paper-on-expanding-evaluations-to-burmese-was-presented-at-lrec-2026-and-last-month-we-released-our-collection-of-embedding-models-optimized-for-sea-languages-this-work-will-be-presented-at-acl-2026-in-july-panálo-na-namán-ang-tímog-silángang-ásya-ibinahági-namín-ang-áming-papél-sa-pagpapaláwak-ng-pagsusurì-pára-sa-burmese-sa-lrec-2026-at-sa-nakaraáng-buwán-inilabás-námin-ang-áming-koleksiyón-ng-mga-embedding-model-na-in-optimize-pára-sa-mga-wikà-ng-sea-ipepresentá-ang-akdâng-itó-sa-acl-2026-sa-húlyo",
          title: 'More wins for Southeast Asia: our paper on expanding evaluations to Burmese was...',
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
