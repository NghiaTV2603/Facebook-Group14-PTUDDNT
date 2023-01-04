import {createSlice} from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:'post',
    initialState:{
        idPost: '1',
        comment:
            [
                {
                    name: 'Ahihi',
                    avatar:
                        "https://image.tienphong.vn/600x315/Uploaded/2022/zaugtn/2022_05_10/avatar-609.jpg",
                    comment: "Nội dung có liên quan",
                },
                {
                    name: 'Nghiatv',
                    avatar:
                        "https://vcdn1-giaitri.vnecdn.net/2022/04/28/Avatar2JamesCameron-1651112439-5213-1651112580.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=hkDCL9zLv2Q3HB-EYkf6zQ",
                    comment: "Avatar 2 hé lộ những thước phim đầu tiên",
                },
                {
                    name: 'Nghiatv',
                    avatar:
                        "https://vcdn1-thethao.vnecdn.net/2022/11/30/Untitled-8697-1669804562.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=3Qi2v17m7Fy_udZMXg_RPg",
                    comment: "GOAT Messi",
                },
                {
                    name: 'Nghiatv',
                    avatar:
                        "https://cdn1.tuoitre.vn/zoom/600_315/2022/12/6/ronaldo-3-1670308112515303078038-crop-1670308130421159602441.jpg",
                    comment: "Cổ động viên Bồ Đào Nha không muốn Ronaldo",
                },
                {
                    name: 'Nghiatv',
                    avatar:
                        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
                    comment:
                        "GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....",
                },
                {
                    name: 'Nghiatv',
                    avatar:
                        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
                    comment:
                        "GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....",
                },
                {
                    name: 'Nghiatv',
                    avatar:
                        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
                    comment: "GOAT Messi ....GOAT Messi ....GOAT Messi ....",
                },
                {
                    name: 'Nghiatv',
                    avatar:
                        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
                    comment: "GOAT Messi ....GOAT Messi ....GOAT Messi ....",
                },
                {
                    name: 'NamNV',
                    avatar:
                        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
                    comment: "GOAT Messi ....GOAT Messi ....GOAT Messi ....",
                },
                {
                    name: 'Nghiatv',
                    avatar:
                        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
                    comment: "GOAT Messi ....GOAT Messi ....GOAT Messi ....",
                },
            ],
    },
    reducers:{
    },
})

export default postSlice