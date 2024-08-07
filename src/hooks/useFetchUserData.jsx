import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUserData = (authToken) => {
  const [userData, setUserData] = useState({
    user: null,
    wallet: null,
    total_order: 0,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://theowletapp.com/server/api/v1/users/analytics",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        const data = response.data.data;
        setUserData({
          user: data.user,
          wallet: data.wallet,
          referral: data.referral,
          total_order: data.total_order,
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [authToken]);

  return { userData, error, loading };
};

export default useFetchUserData;
