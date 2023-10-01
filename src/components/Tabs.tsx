import "./Tabs.css";

interface TabsProps {
  tabGroupName: string;
  tabNames?: string[];
  tabTexts?: string[];
}

export const Tabs = ({
  tabNames = ["Tab"],
  tabTexts = ["Some tab text"],
  tabGroupName,
}: TabsProps) => {
  return (
    <div className="tabs">
      <div className="tabs__names">
        {tabNames.map((tab, index) => {
          return (
            <>
              <label className="tabs__name">
                <input
                  type="radio"
                  className="tabs__radio"
                  name={tabGroupName}
                />
                {tab}
              </label>
              <div className="tabs__text">{tabTexts[index]}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};
