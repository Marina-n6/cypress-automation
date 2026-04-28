describe("百度首页测试", () => {
  // 每个测试前，先跑这里，用于省略测试的重复步骤
  beforeEach(() => {
    cy.visit("https://www.baidu.com");
    // cy.get("#kw", { timeout: 10000 }).should("be.visible");
    // 参cy.get()获取目标元素, cy.should()断言元素可见
    // timeout 解决了Cypress跑的比页面快的问题，让元素找10s，避免浏览器还没反应完而Cypress超时报错的问题
  });

  it("应该能搜索 Cypress 并看到相关结果", () => {
    cy.search("Cypress 测试"); // cy.search()是自定义命令，在command.js里
    cy.contains("Cypress").should("be.visible"); // cy.contains()是查找文字，然后断言文字是否存在
    cy.get(".t").first().should("contain", "Cypress"); //cy.get()是查找元素，然后断言是否包含文字
  });

  it("应该能搜索天气并看到天气卡片", () => {
    cy.search("北京天气");
    cy.get(".cos-space-mr-xs").first().should("be.visible"); //first()表示取第一个
  });

  it("搜索框在输入前不应该有下拉建议", () => {
    // 断言下拉建议面板不存在
    cy.get(".bdsug").should("not.exist"); //断言不存在的用例
  });
});
