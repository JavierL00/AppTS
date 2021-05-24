interface Geo {
    let: string,
    lng: string
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

interface UserItem {
    id: number,
    name: string,
    username: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

interface IUsers {
    users: ArrayList<UserItem>,
    get(index: number): UserItem | null,
}

class ArrayList<T> {

    private items: T[];

    constructor() {
        this.items = [];
    }

    get(index: number): T | null {

        const item: T[] = this.items.filter((x: T, i: number) => {
            return i === index;
        });

        if (item.length === 0) {
            return null;
        } else {
            return item[0];
        }
    }

    createFrom(value: T[]) {
        this.items = [...value];
    }

    getAll(): T[] {
        return this.items;
    }

}

class Users implements IUsers {

    users: ArrayList<UserItem>;

    constructor() {
        this.users = new ArrayList<UserItem>();
    }

    get(index: number): UserItem | null {
        return this.users.get(index);
    }

    getItems(): UserItem[] {
        return this.users.getAll();
    }

}