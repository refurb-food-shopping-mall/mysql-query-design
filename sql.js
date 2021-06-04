module.exports = {
    main = {
        query: `SELECT t_product.product_name, t_product.product_price, t_product_image.path
        FROM t_product, t_product_image
        WHERE t_product.id = t_product_image.product_id AND t_product_image.type_image = 1;`
    },
    Cart = {
        /* vuex를 사용하여 해결할 예정 */
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

        query5 : ``
    },
    Product = {
        상품 정보 가져오는 쿼리
        상품에 해당하는 리뷰가져오는 쿼리
        상품에 해당하는 큐엔에이 가져오는 쿼리
        상품 이미지 가져오는 쿼리
        상품 상세설명 이미지 가져오는 쿼리
    },
    Shipping = {
        현재 배송중인 상품의 개수를 구하는 쿼리 (트럭옆에 숫자)
        특정 날짜를 기준으로 배송이 완료된 상품의 개수를 구하는 쿼리
        특정 날짜를 기준으로 반품이 완료된 상품의 개수를 구하는 쿼리
        특정 날짜를 기준으로 주문한 상품의 목록을 구하는 쿼리
    },
    Userprofileupdate = {
        기존 회원의 데이터를 불러오는 쿼리 
        새로운 데이터를 업데이트하는 쿼리
    },
    Signup = {
        새로운 유저정보를 추가하는 쿼리
    },
    Login = {
        입력한id값을 유저테이블에서 찾는 쿼리

    },
    Addproduct = {
        제품테이블에 새로운 제품을 추가하는 쿼리
        제품이미지데이블에 해당 제품의 이미지를 추가하는 쿼리
    },
    Review = {
        리뷰테이블에 새로운 리뷰를 등록하는 쿼리
        리뷰이미지테이블에 해당 리뷰의 이미지를 추가하는 쿼리
    }

}