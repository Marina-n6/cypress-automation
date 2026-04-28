describe("mock拦截测试", () => {
  it("练习6：验证 Mock 拦截生效", () => {
    cy.intercept("GET", "**/comments/*", { statusCode: 200 }).as("getComment");
    // cy.intercept()：设陷阱，提前声明规则
    // 网页如果发起 GET 请求（请求获取服务器数据），且匹配 **/comments/*, cy.intercept()就会中途拦截，给了一个假响应200，拦截名：getComment
    // 200：成功    404：没找到    500：服务器崩了
    // POST 提交数据
    //
    cy.visit("https://example.cypress.io/commands/network-requests");
    cy.contains("Get Comment").click();
    // click()点击按钮后，网页会向 **/comments/* 这个地址发起真实 HTTP 请求。
    cy.wait("@getComment").its("response.statusCode").should("eq", 200);
    // cy.wait("@getComment")：验证拦截  its("response.statusCode")：拿到状态码  should断言
  });
});
