import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

const InputArea = styled.div`
    display: flex;
`;

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
`;

const TodoItems = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const TodoItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: none;
    }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    margin-right: 10px;
    height: 20px;
    width: 20px;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const Task = styled.span<{ completed: boolean }>`
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const AddButton = styled(Button)`
    margin-left: 10px;
    background-color: #17a2b8;
    color: #fff;
`;

const EditButton = styled(Button)`
    background-color: #f5dd09;
    color: #fff;
`;

const DeleteButton = styled(Button)`
    background-color: #dc3545;
    color: #fff;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;

    &:focus {
        outline: none;
        border-color: #17a2b8;
    }
`;

type Item = {
    completed: boolean;
    task: string;
};

const sampleList = [
    { completed: false, task: "React" },
    { completed: false, task: "AWS" },
    { completed: false, task: "DevOps" },
];

/**
 * @description 할 일 목록
 */
function TodoList() {
    // state
    const [inputValue, setInputValue] = useState<string>("");
    const [list, setList] = useState<Item[]>(sampleList);

    // event
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const onAdd = () => {
        if (!inputValue) {
            alert("할 일을 입력하세요");
            return;
        }
        // concat 은 원본 배열을 유지하면서 추가만 해줌
        // setList((prevList) => {
        //     const updateList = prevList.concat(inputValue);
        //     return updateList;
        // });
        setList((prevList) => [
            ...prevList,
            { completed: false, task: inputValue },
        ]);
        setInputValue("");
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    };
    const onDelete = (idx: number) => {
        setList((prevList) => prevList.filter((item, index) => index !== idx));
    };
    const onEdit = (idx: number) => {
        const updateValue = prompt();

        if (!updateValue) {
            alert("할 일을 입력하세요");
            return;
        }

        setList((prevList) => {
            const updateList = prevList.map((item, index) => {
                if (idx === index) {
                    return { ...item, task: updateValue };
                } else {
                    return item;
                }
            });
            return updateList;
        });
    };
    const onCheck = (idx: number) => {
        setList((prevList) => {
            const updateList = prevList.map((item, index) => {
                if (idx === index) {
                    return { ...item, completed: !item.completed };
                } else {
                    return item;
                }
            });
            return updateList;
        });
    };

    // view
    return (
        <Wrapper>
            <Title>Todo List</Title>
            <form onSubmit={onSubmit}>
                <InputArea>
                    <Input
                        type="text"
                        placeholder="할 일을 입력해주세요."
                        value={inputValue}
                        onChange={onChange}
                    />
                    <AddButton onClick={onAdd}>Add</AddButton>
                </InputArea>
            </form>
            <TodoItems>
                {list.map((item, idx) => (
                    <TodoItem key={idx}>
                        <Flex>
                            <Checkbox onClick={() => onCheck(idx)} />
                            <Task completed={item.completed}>{item.task}</Task>
                        </Flex>
                        <div>
                            <EditButton onClick={() => onEdit(idx)}>
                                Edit
                            </EditButton>
                            <DeleteButton onClick={() => onDelete(idx)}>
                                Delete
                            </DeleteButton>
                        </div>
                    </TodoItem>
                ))}
            </TodoItems>
        </Wrapper>
    );
}

export default TodoList;
