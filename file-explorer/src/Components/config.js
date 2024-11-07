const explorerConfig = [
    {
        id: 1,
        name: "root",
        isFolder: true,
        items: [
            {
                id: 2,
                name: "public",
                isFolder: true,
                items: [
                    {
                        id: 3,
                        name: "index.html",
                        isFolder: false,
                        items: []
                    },
                    {
                        id: 4,
                        name: "index.css",
                        isFolder: false,
                        items: []
                    }
                ]
            },
            {
                id: 5,
                name: "package.json",
                isFolder: false,
                items: []
            }
        ]
    },
    {
        id: 6,
        name: "src",
        isFolder: true,
        items: [
            {
                id: 7,
                name: "App.js",
                isFolder: false,
                items: []
            },
            {
                id: 8,
                name: "index.js",
                isFolder: false,
                items: []
            }
        ]
    },
    {
        id: 9,
        name: "package.json",
        isFolder: false,
        items: []
    },
    {
        id: 10,
        name: "package-lock.json",
        isFolder: false,
        items: []
    }
]

export default explorerConfig;