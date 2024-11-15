import { articles, getRandomElement, users } from "@/app/lib/data";
import { Article } from "@/app/models/Blog";
import { Contact } from "@/app/models/Contact";
import { emptyPage, Page, PageableModel } from "@/app/models/General";
import { randomUUID } from "crypto";

export async function fetchArticle(pageable: PageableModel): Promise<Page<Article>> {
    let { page, size } = pageable;
    page = page - 1
    const skip = page * size;
    if (skip > articles.length || size <= 0 || page < 0) {
        return await new Promise((resolve) => setTimeout(() => { resolve(emptyPage); }, 1000));
    }
    // a();
    const take = (skip + size > articles.length) ? articles.length - skip : size;
    const result = articles.slice(skip, skip + take);
    return {
        content: result,
        currentPage: parseInt((skip / size).toString()),
        totalElements: articles.length,
        totalPage: parseInt((articles.length / size).toString()) + 1
    }
}

function a() {
    const c: Contact[] = [
        {
            "name": "Hanh Le",
            "email": "hanh.le@example.com",
            "website": "http://example.com/contact",
            "message": "This is a sample message.",
            id: "",
            by: undefined
        },
        {
            "name": "Minh Pham",
            "email": "minh.pham@example.com",
            "website": "http://example.com/contact",
            "message": "Testing message content.",
            id: "",
            by: undefined
        },
        {
            "name": "Thao Tran",
            "email": "thao.tran@example.com",
            "website": "http://example.com/contact",
            "message": "Hello, world!",
            id: "",
            by: undefined
        },
        {
            "name": "Khoa Nguyen",
            "email": "khoa.nguyen@example.com",
            "website": "http://example.com/contact",
            "message": "Sample message here.",
            id: "",
            by: undefined
        },
        {
            "name": "Lan Hoang",
            "email": "lan.hoang@example.com",
            "website": "http://example.com/contact",
            "message": "Just a test message.",
            id: "",
            by: undefined
        },
        {
            "name": "Duc Bui",
            "email": "duc.bui@example.com",
            "website": "http://example.com/contact",
            "message": "Message content goes here.",
            id: "",
            by: undefined
        },
        {
            "name": "Anh Vo",
            "email": "anh.vo@example.com",
            "website": "http://example.com/contact",
            "message": "Another sample message.",
            id: "",
            by: undefined
        },
        {
            "name": "Quynh Le",
            "email": "quynh.le@example.com",
            "website": "http://example.com/contact",
            "message": "Hello, this is a test.",
            id: "",
            by: undefined
        },
        {
            "name": "Son Tran",
            "email": "son.tran@example.com",
            "website": "http://example.com/contact",
            "message": "Testing, 1, 2, 3.",
            id: "",
            by: undefined
        },
        {
            "name": "Mai Nguyen",
            "email": "mai.nguyen@example.com",
            "website": "http://example.com/contact",
            "message": "Sample message for testing.",
            id: "",
            by: undefined
        }
        ,
        {
            "name": "Tuan Pham",
            "email": "tuan.pham@example.com",
            "website": "http://example.com/contact",
            "message": "This is another test message.",
            id: "",
            by: undefined
        },
        {
            "name": "Trang Do",
            "email": "trang.do@example.com",
            "website": "http://example.com/contact",
            "message": "Sample message content.",
            id: "",
            by: undefined
        },
        {
            "name": "Binh Tran",
            "email": "binh.tran@example.com",
            "website": "http://example.com/contact",
            "message": "Hello, this is a sample.",
            id: "",
            by: undefined
        },
        {
            "name": "Hoa Le",
            "email": "hoa.le@example.com",
            "website": "http://example.com/contact",
            "message": "Testing message here.",
            id: "",
            by: undefined
        },
        {
            "name": "Nam Nguyen",
            "email": "nam.nguyen@example.com",
            "website": "http://example.com/contact",
            "message": "Another test message.",
            id: "",
            by: undefined
        },
        {
            "name": "Phuong Vo",
            "email": "phuong.vo@example.com",
            "website": "http://example.com/contact",
            "message": "Message content for testing.",
            id: "",
            by: undefined
        },
        {
            "name": "Hieu Bui",
            "email": "hieu.bui@example.com",
            "website": "http://example.com/contact",
            "message": "Sample message here.",
            id: "",
            by: undefined
        },
        {
            "name": "Thu Hoang",
            "email": "thu.hoang@example.com",
            "website": "http://example.com/contact",
            "message": "Hello, this is a test message.",
            id: "",
            by: undefined
        },
        {
            "name": "Vinh Le",
            "email": "vinh.le@example.com",
            "website": "http://example.com/contact",
            "message": "Testing, testing.",
            id: "",
            by: undefined
        },
        {
            "name": "Yen Tran",
            "email": "yen.tran@example.com",
            "website": "http://example.com/contact",
            "message": "Sample message for testing purposes.",
            id: "",
            by: undefined
        },
        {
            "name": "Linh Tran",
            "email": "linh.tran@example.com",
            "website": "http://example.com/contact",
            "message": "This is a test message.",
            id: "",
            by: undefined
        },
        {
            "name": "Hung Nguyen",
            "email": "hung.nguyen@example.com",
            "website": "http://example.com/contact",
            "message": "Sample message content.",
            id: "",
            by: undefined
        },
        {
            "name": "Tam Le",
            "email": "tam.le@example.com",
            "website": "http://example.com/contact",
            "message": "Hello, this is a sample message.",
            id: "",
            by: undefined
        },
        {
            "name": "Quoc Pham",
            "email": "quoc.pham@example.com",
            "website": "http://example.com/contact",
            "message": "Testing message here.",
            id: "",
            by: undefined
        },
        {
            "name": "Vy Hoang",
            "email": "vy.hoang@example.com",
            "website": "http://example.com/contact",
            "message": "Another test message.",
            id: "",
            by: undefined
        },
        {
            "name": "Duy Bui",
            "email": "duy.bui@example.com",
            "website": "http://example.com/contact",
            "message": "Message content for testing.",
            id: "",
            by: undefined
        },
        {
            "name": "Hanh Vo",
            "email": "hanh.vo@example.com",
            "website": "http://example.com/contact",
            "message": "Sample message here.",
            id: "",
            by: undefined
        },
        {
            "name": "Thuy Le",
            "email": "thuy.le@example.com",
            "website": "http://example.com/contact",
            "message": "Hello, this is a test message.",
            id: "",
            by: undefined
        },
        {
            "name": "Phat Tran",
            "email": "phat.tran@example.com",
            "website": "http://example.com/contact",
            "message": "Testing, testing.",
            id: "",
            by: undefined
        },
        {
            "name": "Nhi Nguyen",
            "email": "nhi.nguyen@example.com",
            "website": "http://example.com/contact",
            "message": "Sample message for testing purposes.",
            id: "",
            by: undefined
        }
    ]


    c.forEach(x => {
        x.id = randomUUID()
        x.by = getRandomElement(users)
    })
    console.log(c);

}