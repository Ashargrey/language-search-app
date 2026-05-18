
        // ================= DOM ELEMENTS =================
        let userContainer = document.querySelector(".userContainer");
        let input = document.querySelector("#searchinput");

        // ================= DATA =================
     const languages = [
    // ================= LANGUAGES =================
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4FK-H-yNLJB0yOZxJ9y9OW6o9JCouaM-rw&s",
        name: "C",
        about: "Low-level programming language."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        name: "C++",
        about: "High performance apps & games."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        name: "C#",
        about: "Used in .NET & Unity games."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        name: "Java",
        about: "Enterprise & Android apps."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        name: "Python",
        about: "AI, automation & backend."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        name: "JavaScript",
        about: "Web interactivity language."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "TypeScript",
        about: "Typed JavaScript version."
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1280px-Rust_programming_language_black_logo.svg.png",
        name: "Rust",
        about: "Memory-safe systems language."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        name: "Go",
        about: "Fast backend language by Google."
    },

    // ================= FRONTEND =================
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        name: "HTML",
        about: "Structure of web pages."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        name: "CSS",
        about: "Styling web pages."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React",
        about: "Frontend UI library."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        name: "Next.js",
        about: "Fullstack React framework."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        name: "Vue.js",
        about: "Progressive frontend framework."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        name: "Angular",
        about: "Google frontend framework."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
        name: "Svelte",
        about: "Modern lightweight frontend framework."
    },

    // ================= BACKEND =================
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js",
        about: "JavaScript backend runtime."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        name: "Express.js",
        about: "Node.js backend framework."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        name: "PHP",
        about: "Server-side scripting language."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        name: "Django",
        about: "Python backend framework."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        name: "Flask",
        about: "Lightweight Python backend."
    },

    // ================= DATABASES =================
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
        about: "Relational database."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        name: "MongoDB",
        about: "NoSQL database."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        name: "PostgreSQL",
        about: "Advanced SQL database."
    },

    // ================= CSS FRAMEWORKS =================
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        name: "Tailwind CSS",
        about: "Utility-first CSS framework."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        name: "Bootstrap",
        about: "Popular CSS framework."
    },

    // ================= LIBRARIES =================
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
        name: "Three.js",
        about: "3D graphics for web."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        name: "Redux",
        about: "State management library."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        name: "jQuery",
        about: "JavaScript DOM library."
    },

    // ================= TOOLS =================
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        name: "Git",
        about: "Version control system."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        name: "GitHub",
        about: "Code hosting platform."
    },
    {
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        name: "Docker",
        about: "Containerization tool."
    }
];

        // ================= RENDER FUNCTION =================
        function renderList(data) {

            // clear old UI
            userContainer.innerHTML = "";

            // create cards
            data.forEach((item) => {

                let card = document.createElement("div");
                card.className = "userItem";

                let image = document.createElement("div");
                image.className = "image";

                let img = document.createElement("img");
                img.src = item.imgUrl;

                image.appendChild(img);

                let text = document.createElement("div");
                text.className = "userDetails";

                let title = document.createElement("h3");
                let desc = document.createElement("p");

                title.innerText = item.name;
                desc.innerText = item.about;

                text.appendChild(title);
                text.appendChild(desc);

                card.appendChild(image);
                card.appendChild(text);

                userContainer.appendChild(card);
            });
        }

        // initial render
        renderList(languages);

        // ================= SEARCH FUNCTION =================
        input.addEventListener("input", function (e) {

            let value = e.target.value.toLowerCase();

            let filtered = languages.filter((item) => {
                return item.name.toLowerCase().includes(value) ||
                    item.about.toLowerCase().includes(value);
            });

            renderList(filtered);
        });
 