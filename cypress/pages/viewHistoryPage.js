class ViewHistoryPage {
    selectorsList() {
        const selectors = {
            usernameField: "#username" ,
            passwordField: "#password" ,
            loginButton: '[data-test="signin-submit"]'
        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('')
    }

    loginWithSuccess(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkTransactionHistory() {
        cy.get('[role="rowgroup"]').should('be.visible')
    }

    viewFriendsHistory() {
        cy.get('[href="/contacts"]').click()
    }

    checkMessageNoTransactions() {
        cy.get('[data-test="empty-list-header"]').contains('No Transactions')
        
    }

    buttonCreateTransaction() {
        cy.get('[data-test="transaction-list-empty-create-transaction-button"]')
    }
}


export default ViewHistoryPage