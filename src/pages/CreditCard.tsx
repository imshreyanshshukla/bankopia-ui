
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CreditCard, Calendar, CopyIcon, PieChart, Receipt, DollarSign, Coffee, ShoppingBag, Utensils, Smartphone, Film } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";

const CreditCardPage = () => {
  const navigate = useNavigate();
  const [showCardDetails, setShowCardDetails] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  
  const handleSubmitCard = () => {
    if (cardNumber && cardName && expiryDate && cvv) {
      setShowCardDetails(false);
      toast({
        title: "Card Added Successfully",
        description: "Your credit card has been linked to your account.",
      });
    } else {
      toast({
        title: "Missing Information",
        description: "Please fill in all card details.",
        variant: "destructive",
      });
    }
  };

  // Sample data for bills
  const pendingBills = [
    { id: 1, name: "Electricity Bill", amount: 78.50, dueDate: "2023-10-25" },
    { id: 2, name: "Internet Service", amount: 59.99, dueDate: "2023-10-28" },
    { id: 3, name: "Water Bill", amount: 42.30, dueDate: "2023-11-01" },
  ];

  // Sample data for spending
  const spendingCategories = [
    { category: "Food & Dining", amount: 385.75, icon: <Utensils size={16} />, color: "bg-amber-500" },
    { category: "Shopping", amount: 264.20, icon: <ShoppingBag size={16} />, color: "bg-blue-500" },
    { category: "Entertainment", amount: 120.99, icon: <Film size={16} />, color: "bg-purple-500" },
    { category: "Coffee Shops", amount: 87.45, icon: <Coffee size={16} />, color: "bg-rose-500" },
    { category: "Mobile Phone", amount: 65.00, icon: <Smartphone size={16} />, color: "bg-green-500" },
  ];

  // Calculate total spending
  const totalSpending = spendingCategories.reduce((total, cat) => total + cat.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <div className="w-full max-w-4xl mx-auto">
          {showCardDetails ? (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Link Your Credit Card</CardTitle>
                <CardDescription>
                  Add your credit card to view your bills and spending breakdown
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="cardNumber" 
                        placeholder="1234 5678 9012 3456" 
                        className="pl-10" 
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input 
                      id="cardName" 
                      placeholder="John Doe" 
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="expiryDate" 
                          placeholder="MM/YY" 
                          className="pl-10" 
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <div className="relative">
                        <CopyIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="cvv" 
                          placeholder="123" 
                          className="pl-10" 
                          type="password" 
                          maxLength={3}
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleSubmitCard} 
                  className="w-full bg-bank-dark"
                >
                  Link Card
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Tabs defaultValue="bills" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="bills" className="text-base py-3">
                  <Receipt className="mr-2 h-4 w-4" />
                  Pending Bills
                </TabsTrigger>
                <TabsTrigger value="spending" className="text-base py-3">
                  <PieChart className="mr-2 h-4 w-4" />
                  Spending Breakdown
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="bills" className="mt-0">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Your Pending Bills</CardTitle>
                    <CardDescription>
                      Upcoming payments and due dates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingBills.map((bill) => (
                        <div key={bill.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-medium">{bill.name}</h3>
                            <p className="text-sm text-gray-500">Due: {new Date(bill.dueDate).toLocaleDateString()}</p>
                          </div>
                          <div className="flex items-center">
                            <span className="font-semibold mr-4">${bill.amount.toFixed(2)}</span>
                            <Button size="sm">Pay Now</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm text-gray-500">Total Due: ${pendingBills.reduce((sum, bill) => sum + bill.amount, 0).toFixed(2)}</span>
                      <Button variant="outline">Pay All Bills</Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="spending" className="mt-0">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Spending Breakdown</CardTitle>
                    <CardDescription>
                      Your spending by category this month
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">Total Spending</h3>
                          <p className="text-sm text-gray-500">October 2023</p>
                        </div>
                        <div className="text-2xl font-bold flex items-center">
                          <DollarSign className="h-5 w-5 text-bank-dark" />
                          {totalSpending.toFixed(2)}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {spendingCategories.map((cat, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-full ${cat.color} flex items-center justify-center text-white mr-3`}>
                                  {cat.icon}
                                </div>
                                <span>{cat.category}</span>
                              </div>
                              <span className="font-medium">${cat.amount.toFixed(2)}</span>
                            </div>
                            <Progress value={(cat.amount / totalSpending) * 100} className={cat.color} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditCardPage;
