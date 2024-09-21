import userData from '../fixtures/data-user.json'
import ViewHistoryPage from "../pages/viewHistoryPage";


const viewHistoryPage = new ViewHistoryPage()

describe('Try to view transaction history with no previous transactions', () => {


    it('Should display a message indicating that the user has no previous transactions', () => {
        viewHistoryPage.accessLoginPage()
        viewHistoryPage.loginWithSuccess(userData.userSuccess.username, userData.userSuccess.password)

        viewHistoryPage.viewFriendsHistory()
        viewHistoryPage.checkMessageNoTransactions()
        viewHistoryPage.buttonCreateTransaction()
    });
    
});