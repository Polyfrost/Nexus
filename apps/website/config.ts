import type { Config, NavbarDropdown, NavbarElement, Project } from "@webtypes/Config";

export const configConst = {
    projects: getProjects(),
    logos: [
        "oneconfig.minimal",
        "polyfrost.full",
        "polyfrost.minimal",
        "polyfrost.minimal_bg",
    ],
    navbar: {
        left: [
            {
                logo: ["polyfrost.full", -1],
                path: "/",
            }
        ],
        right: [
            {
                text: "Home",
                path: "/",
            },
            {
                text: "Projects",
                dropdown: (getProjects().map((project) => {
                    (project as any).path = `/projects/${project.name.toLowerCase()}`;
                    return project;
                }) as unknown as NavbarDropdown[])
            }
        ]
    }
} as const satisfies Config;

function getProjects(): Project[] {
    return [
        {
            name: "OneConfig",
            description: "The next-generation config library for Forge and Fabric",
            logo: "oneconfig.minimal",
            tag: "BETA"
        },
        {
            name: "OneLauncher",
            description: "The next-generation launcher for Forge and Fabric",
            logo: "polyfrost.minimal",
            tag: "SOON"
        },
        {
            name: "OneConfig",
            description: "The next-generation config library for Forge and Fabric",
            logo: "oneconfig.minimal",
            tag: "BETA"
        },
        {
            name: "OneLauncher",
            description: "The next-generation launcher for Forge and Fabric",
            logo: "polyfrost.minimal",
            tag: "SOON"
        },
        {
            name: "OneConfig",
            description: "The next-generation config library for Forge and Fabric",
            logo: "oneconfig.minimal",
            tag: "BETA"
        },
        {
            name: "OneLauncher",
            description: "The next-generation launcher for Forge and Fabric",
            logo: "polyfrost.minimal",
            tag: "SOON"
        },
        {
            name: "OneConfig",
            description: "The next-generation config library for Forge and Fabric",
            logo: "oneconfig.minimal",
            tag: "BETA"
        },
        {
            name: "OneLauncher",
            description: "The next-generation launcher for Forge and Fabric",
            logo: "polyfrost.minimal",
            tag: "SOON"
        },
    ]
}






// -------------------- NO TOUCH --------------------- //
export default configConst as unknown as Config;
