interface ResData {
    userID: number
    id: number
    title: string
    body: string
}

class FifteenthTitle {
    static #URL = 'https://jsonplaceholder.typicode.com/posts'
    static #ID = 15

    static #get() {
        fetch(FifteenthTitle.#URL)
            .then(res => {
                if (res.ok) return res.json()
            })
            .then(resData => FifteenthTitle.#getTitleFromJson(resData))
            .then(element => console.log(`Заголовок поста с id - ${element.id}` + ' => ' + element.title))
            .catch(({ message }) => console.error(message))
    }

    static #getTitleFromJson(resData: ResData[]) {
        const itemWithTitle = resData.find(item => item.id === FifteenthTitle.#ID)
        const title = itemWithTitle?.title
        const id = itemWithTitle?.id

        return { title, id }
    }

    run() {
        FifteenthTitle.#get()
    }
}

const fifteenhTitle = new FifteenthTitle()
fifteenhTitle.run()