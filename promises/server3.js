const returnListOfString = () => {
    return Promise.resolve(["A", "B"]);
};

returnListOfString()
    .then(stringList =>
        stringList.map(x => {
            return new Promise((resolve, reject) => {
                resolve(x => x + "===")
            });
        })
    )
    .then(console.log);
