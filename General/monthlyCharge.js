function monthlyCharge(month, subscription, users) {
  if (!subscription) return 0;

  const billingMonth = new Date(month);
  const firstDay = firstDayOfMonth(billingMonth);
  const lastDay = lastDayOfMonth(billingMonth);

  const activeUsers = users.filter((user) => {
    const activatedDate = new Date(user.activatedOn);
    const deactivatedDate = user.deactivatedOn ? new Date(user.deactivatedOn) : null;

    return (
      (activatedDate <= lastDay && (!deactivatedDate || deactivatedDate >= firstDay)) ||
      (activatedDate < firstDay && !deactivatedDate)
    );
  });

  const totalCharge = activeUsers.length * subscription.monthlyPriceInCents;
  return Math.round(totalCharge);
}
