export const data = {
    name: "root",
    isFolder: true,
    items: [
        {
                name: "public",
                isFolder: true,
                items: [
                    {
                        name: "index.html",
                        isFolder: false,
                    }
                    
                ]
        },
        {
            name: "src",
            isFolder: true,
            items: [
                {
                    name: "index.jsx",
                    isFolder: false,
                    },
                    {
                        name: "style.css",
                        isFolder: false,
                    },
                    {
                        name: "components",
                        isFolder: true,
                        items: [
                            {
                                name: "Explorer.jsx",
                                isFolder: false,
                            }
                        ]

                    },
                    {
                        name: "constants",
                        isFolder: true,
                        items: [
                            {
                                name: "data.jsx",
                                isFolder: false,
                            }
                        ]
                    }
            ]
        },
        {
            name: "package.json",
            isFolder: false,
        }
  
    ]

}