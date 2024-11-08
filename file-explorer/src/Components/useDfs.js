const useDfs = () => {
    
    const createNewItem = (tree, newItemName, currentFolderId, isFolder) => {
        if(tree.id === currentFolderId && tree.isFolder) {
            tree.items.unshift({
                id: Date.now(),
                name: newItemName,
                isFolder,
                items: []
            })
            return tree;
        }

        let latestNode = [];
        latestNode = tree.items.map((item) => {
            return createNewItem(item, newItemName, currentFolderId, isFolder);
        })

        return {...tree, items: latestNode};
    }

    const deleteItem = (tree, id) => {
        if(tree.id === id) {
            return null;
        }

        let latestNode = [];
        latestNode = tree.items.map((item) => {
            return deleteItem(item, id);
        }).filter((item) => item !== null);

        return {...tree, items: latestNode};
    }

    const renameItem = (tree, id, newName) => {
        if(tree.id === id) {
            return {...tree, name: newName};
        }

        let latestNode = [];
        latestNode = tree.items.map((item) => {
            return renameItem(item, id, newName);
        });

        return {...tree, items: latestNode};
    }


    return {createNewItem, deleteItem, renameItem};
}

export default useDfs;