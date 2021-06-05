module.exports = {
    main = {
        query: `SELECT t_product.product_name, t_product.product_price, t_product_image.path
        FROM t_product, t_product_image
        WHERE t_product.id = t_product_image.product_id AND t_product_image.type_image = 1;`
    },
    Cart = {
        /* vuex + localStroage를 사용하여 해결할 예정 */
    },
    Cancel = {

    },
    Payment = {
        query1 : `SELECT t_user.user_name, t_user.phone_number, t_user.user_email, t_user.user_point_money
        FROM t_user WHERE t_user.id = ?`, /* 주문페이지에서 고객정보를 가져오는 쿼리 */

        query2 : `SELECT * FROM t_address
        WHERE t_address.user_id = ? AND t_address.default_address = 1;`, /*배송지파트에서 기본배송지 버튼을 클릭했을 때 실행할 쿼리*/

        query3 : `SELECT t_address.address_name FROM t_address 
        WHERE t_address.user_id = ? AND t_address.address_type = 1;`,
        /*배송지파트에서 배송지목록 버튼을 클릭했을 때 실행될 쿼리 */
        
        query4 : `SELECT * FROM t_address 
        WHERE t_address.user_id = ? AND t_address.address_type = 1 AND t_address.address_name = ?;`,
        /* 배송지목록에서 특정 배송지를 클릭했을 때 실행될 쿼리 */

        query5 : `INSERT INTO t_address (receiver, address_name, post_code, city, road_name, detailed_address, 
            first_phonenumber, second_phonenumber, address_type, default_address) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, 0);`,
            /* 기본배송지로 설정하지 않고 배송지 목록에만 추가할 때 */
        query6 : `INSERT INTO t_address (receiver, address_name, post_code, city, road_name, detailed_address, 
            first_phonenumber, second_phonenumber, address_type, default_address) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, 1);`,
            /* 기본배송지로 설정 하였을 때 */
        query7 : `INSERT INTO t_address (receiver, address_name, post_code, city, road_name, detailed_address, 
            first_phonenumber, second_phonenumber, address_type, default_address) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 2, 0);`
            /* 기본배송지로 설정하지 않고 배송지 목록에도 추가하지 않을 때 */
    },
    Product = {
        query1 : 
        `SELECT t_product.product_name, t_product.delivery_price, t_product.add_delivery_price, t_product_image.path 
        FROM t_product, t_product_image
        WHERE t_product_image.product_id = ? AND t_product_image.type_image = 2 OR 
        t_product_image.product_id = ? AND t_product_image.type_image = 3`,
        /* 제품정보와 제품이미지 제품상세이미지 불러오는 쿼리 */

        query2 : `SELECT t_review.star_grade, t_review.review_title, t_review.review_description, t_review_image.path, t_user.user_email
        FROM t_review, t_review_image, t_user
        WHERE t_review.product_id = ? AND t_review.id = t_review_image.review_id AND t_review.user_id = t_user.id
        `,/* 리뷰와 리뷰사진, 리뷰작성자 이메일을 불러오는 쿼리 */

        query3 : `SELECT t_question.q_title, t_quesstion.q_description, t_question.q_created, t_question.answer_status, t_user.user_email
        FROM t_question, t_user
        WHERE t_question.product_id = ? AND t_question.user_id = t_user.id`
        /* QnA와 QnA작성자 이메일을 불러오는 쿼리 */
    
    },
    Shipping = {
        현재 배송중인 상품의 개수를 구하는 쿼리 (트럭옆에 숫자)
        특정 날짜를 기준으로 배송이 완료된 상품의 개수를 구하는 쿼리
        특정 날짜를 기준으로 반품이 완료된 상품의 개수를 구하는 쿼리
        특정 날짜를 기준으로 주문한 상품의 목록을 구하는 쿼리
    },
    Userprofileupdate = {
        // 기존 회원의 데이터를 불러오는 쿼리
        query1: `SELECT * FROM t_user WHERE id = ?;`,
        //수정된 데이터를 업데이트하는 쿼리
        query2: `
        UPDATE t_user
        SET user_name = ?, phone_number = ?, type_business=<새로운 업종값>
        WHERE id=<user_id>;`
    },
    Signup = {
         // 새로운 유저정보를 추가하는 쿼리
         query1: `INSERT INTO t_user (user_name, phone_number, user_email, user_password, type_business, user_point_money)
         VALUES (?, ?, ?, ?, ?, ?);`
    },
    Login = {
        // 입력한ID값과 일치하는 ID를 유저테이블에서 찾는 쿼리
        query1: `SELECT user_name, user_email, user_password FROM t_user WHERE id = ?;`

    },
    Addproduct = {
         // 제품테이블에 새로운 제품을 추가하는 쿼리
         query1: `INSERT INTO t_product (register_user_id, product_category, product_name, product_price, delivery_price, add_delivery_price, total_product)
         VALUES (?, ?, ?, ?, ?, ?, ?,);`,

         // 제품이미지데이블에 해당 제품의 이미지를 추가하는 쿼리
         query2: `INSERT INTO t_product_image (product_id, type_image, path)
         VALUES (?, ?, ?);`
    },
    Review = {
        // 리뷰테이블에 새로운 리뷰를 등록하는 쿼리
        query1: `INSERT INTO t_review (product_id, user_id, review_title, review_description, star_grade)
        VALUES (?, ?, ?, ?, ?);`,

        // 리뷰이미지테이블에 해당 리뷰의 이미지를 추가하는 쿼리
        query2: `INSERT INTO t_review_image (review_id, path)
        VALUES (?, ?);`
    }

}