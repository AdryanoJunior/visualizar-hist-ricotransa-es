import userData from '../fixtures/data-user.json'
import ViewHistoryPage from '../pages/viewHistoryPage'

const viewHistoryPage = new ViewHistoryPage()

describe('View successful transaction history', () => {

  it('Must display a user transaction history correctly', () => {
    viewHistoryPage.accessLoginPage()
    viewHistoryPage.loginWithSuccess(userData.userSuccess.username, userData.userSuccess.password)
    
    viewHistoryPage.checkTransactionHistory()
  })
})